
<template>
  
  <div class="writeBox">
    <div class="postUser">
      <div v-if="userData.U_status == 'Speaker'" class="avatar_speaker">
        <div class="avatar_inner">{{ userData.U_initial }}</div>
      </div>

      <div v-else class="avatar_attendee">
        <div class="avatar_inner">{{ userData.U_initial }}</div>
      </div>

      <div class="userInfo">
        <h1>{{ userData.U_fname }} {{ userData.U_lname }}</h1>
        <h2>{{ userData.U_status }}</h2>
      </div>
    </div>

    <textarea
      v-model="commentData.C_content"
      rows="3"
      placeholder="&#10;Comment on Post..."
    />

    <div class="replyControls">
      <div @click="cancelComment" class="cancelComment">
        <h2>CANCEL</h2>
      </div>

      <div class="submit">
        <h2>Comment</h2>
        <div class="spacer"></div>
        <img @click="fillCommentData" src="ICONS/send_white_24dp.svg" alt="" />
      </div>
    </div>
  </div>
  
</template>



<style scoped>
.writeBox {
  position: relative;
  background-color: #111127;
  /* top: 90px;
  left:0px;
  width: 94vw; */
  margin: 3vw;
  /* z-index: 2; */
  border: solid 2px #fff;
  border-radius: 20px;
}
.postUser {
  display: flex;
  justify-content: start;
  margin: 2vw 3vw 0vw;
}

.submit {
  display: flex;
  justify-content: end;
  height: 25px;
  align-items: center;
  margin: 1vw 0vw 2vw;
}

.replyControls {
  display: flex;
  justify-content: space-between;
  height: 25px;
  align-items: center;
  margin: 1vw 4vw 2vw 6vw;
}

.avatar_speaker {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: 0;
  background-color: #63b798;
}

.avatar_attendee {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: 0;
  background-color: #9369ce;
}

.avatar_inner {
  font-family: "Inter", sans-serif;
  color: white;
  font-weight: 600;
  font-size: 32px;
}

.userInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2vw;
}

h1 {
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 14px;
}

h2 {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 14px;
}

textarea {
  margin: 2vw 4.5vw 0vw;
  padding: 0vw;
  width: 91%;
  border: none;
  outline: none;

  background-color: #111127;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  color: #fff;
  font-size: 14px;
  resize: none;
}

textarea::placeholder {
  text-align: center;
  color: #aaa;
}

.spacer {
  width: 3vw;
}
</style>

<script>
export default {
  data() {
    return {
      userData: {
        U_fname: "",
        U_lname: "",
        U_initial: "",
        U_email: "",
        U_password: "",
        U_status: "",
        U_logIn: "",
      },
      commentData: {
        C_postID: "",
        C_userID: "",
        C_fname: "",
        C_lname: "",
        C_initial: "",
        C_status: "",
        C_content: "",
        C_likes: 0,
      },
    };
  },
  methods: {
    async getUser(userID) {
      const response = await fetch("http://localhost:4000/users/get/" + userID);
      const fetchedData = await response.json();
      this.userData = fetchedData;
    },
    async addComment(inputCommentData) {
      const response = await fetch("http://localhost:4000/comments/addcomment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputCommentData),
      });
      const fetchedData = await response.json();
      this.postDataProp.P_postComments.push(fetchedData._id);
      this.commentData = {
        C_postID: "",
        C_userID: "",
        C_fname: "",
        C_lname: "",
        C_initial: "",
        C_status: "",
        C_content: "",
        C_likes: 0,
      };
      this.updatePost(this.postDataProp);
      this.cancelComment();
    },
    async updatePost(postData) {
      const fetchURL = "http://localhost:4000/posts/update/" + postData._id;
      const response = await fetch(fetchURL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      const fetchedData = await response.json();
  },
    fillCommentData() {
      if (this.commentData.C_content == "") {
        console.log("no content");
        return;
      }
      this.commentData.C_postID = this.postDataProp._id
      this.commentData.C_userID = this.userData._id;
      this.commentData.C_fname = this.userData.U_fname;
      this.commentData.C_lname = this.userData.U_lname;
      this.commentData.C_initial = this.userData.U_initial;
      this.commentData.C_status = this.userData.U_status;
      this.addComment(this.commentData);
    },
    cancelComment(){
        this.commentData.C_content="";
        this.$emit('cancelTrigger');
    }
  },
  created() {
    const currentUserID = "62550ea9903b5e4fb166f9cb";
    this.getUser(currentUserID);
  },
  emits: ["PostListTrigger", "cancelTrigger"],
};
</script>

<script setup>

defineProps({
  postDataProp: {
    type: Object,
    required: true,
  },
});

</script>


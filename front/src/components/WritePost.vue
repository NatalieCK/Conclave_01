
<template>
<div class="postBack">
<div class="writeBox">
  <div class="postUser">

      <div v-if="userData.U_status == 'Speaker'" class="avatar_speaker">
        <div class="avatar_inner">{{ postProp.P_initial }}</div>
      </div>

<div v-else class="avatar_attendee">
        <div class="avatar_inner">{{ userData.U_initial }}</div>
      </div>

      <div class="userInfo">
        <h1>{{ userData.U_fname }} {{ userData.U_lname }}</h1>
        <h2>{{ userData.U_status }}</h2>
      </div>

      
    </div>

  
  <textarea v-model="postData.P_content" rows="3"  placeholder="&#10;Share your thoughts..." />
  
  <div class="submit">
    <h2>Post</h2>
    <div class="spacer"></div>
  <img @click="fillPostData" src="ICONS/send_white_24dp.svg" alt="">
</div>

</div>
</div>
</template>



<style scoped>

.postBack{
  position: fixed;
  top: 0;
  z-index: 1;
width: 100vw;
height: 210px;
background-color: #111127;
}

.writeBox {
  position: fixed;
  background-color: #111127;
  top: 70px;
  left:0px;
  width: 94vw;
  margin: 3vw;
  z-index: 2;
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
 margin: 1vw 6vw 2vw;
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

textarea{
  
  margin: 2vw 4.5vw 0vw;
  padding: 0vw ;
  width: 91%;
  border: none;
  outline: none;
 
  
  background-color: #111127;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
color: #fff;
  font-size: 14px;
  resize: none;
}

textarea::placeholder {
  text-align: center;
  color: #aaa;  
}

.spacer{
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
      postData: {
        P_userID: "",
        P_fname: "",
        P_lname: "",
        P_initial: "",
        P_status: "",
        P_content: "",
        P_likes: 0,
        P_comments: 0,
        P_postComments: [],
      },
    };
  },
  methods: {
    async getUser(userID) {
      const response = await fetch("http://localhost:4000/users/get/" + userID);
      const fetchedData = await response.json();
      this.userData = fetchedData;
    },
    async addPost(inputPostData) {
      const response = await fetch("http://localhost:4000/posts/addpost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputPostData),
      });

      this.$emit("PostListTrigger");
      this.postData = {
        P_userID: "",
        P_fname: "",
        P_lname: "",
        P_initial: "",
        P_status: "",
        P_content: "",
        P_likes: 0,
        P_comments: 0,
        P_postComments: [],
      };
    },
    fillPostData(){
      if(this.postData.P_content==""){
        console.log("no content");
        return;
      };
      this.postData.P_userID=this.userData._id;
      this.postData.P_fname=this.userData.U_fname;
      this.postData.P_lname=this.userData.U_lname;
      this.postData.P_initial=this.userData.U_initial;
      this.postData.P_status=this.userData.U_status;
      this.addPost(this.postData);
      console.log(this.postData)
    }
  },
  created() {
    const currentUserID = "62550ea9903b5e4fb166f9cb";
    this.getUser(currentUserID);
  },
  emits: ["PostListTrigger"]
};
</script>


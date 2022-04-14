<template>
  <div class="commentBox">

    <div class="topRow">

    <div class="commentUser">

      <div v-if="commentData.C_status == 'Speaker'" class="avatar_speaker">
        <div class="avatar_inner">{{ commentData.C_initial }}</div>
      </div>

<div v-else class="avatar_attendee">
        <div class="avatar_inner">{{ commentData.C_initial }}</div>
      </div>

      <div class="userInfo">
        <h1>{{ commentData.C_fname }} {{ commentData.C_lname }}</h1>
        <h2>{{ commentData.C_status }}</h2>
      </div>
    </div>

<div @click="delCommentEmit" class="deleteComment">
<h5>x</h5>
</div>
    </div>

    <div class="commentText">
      <h3>{{ commentData.C_content }}</h3>
    </div>

<div class="bottomRow">

      <div @click="likeCommentEmit" class="likeNumbers">
        <img class="likeIcon" src="ICONS/thumb_up_white_24dp.svg" alt="likes" />
        <h4 v-if="commentData.C_likes" >{{ commentData.C_likes }}</h4>
      </div>

    </div>

  </div>
</template>

<style scoped>
.commentBox {
  /* position: relative; */
  /* top: 175px; */
  margin: 3vw;
  border: solid 2px #9369ce;
  border-radius: 3px;
}

.topRow{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottomRow{
  display: flex;
  height: 25px;
  margin: 0vw 4vw 2vw;
  justify-content: start;
  align-items: center;
  /* border: solid 1px blue; */
}

.deleteComment{
  margin-right: 5vw;
}

.commentUser {
  display: flex;
  justify-content: start;
  margin: 3vw;
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

.commentText {
  margin: 2vw 2vw 3vw 4vw;
}


.likeNumbers {
  display: flex;
  justify-content: start;
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

h3 {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 14px;
}

h4 {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 14px;
}

h5 {
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 30px;
}

.likeIcon {
  height: 16px;
  margin-right: 1vw;
}

</style>

<script>
export default {
  data() {
    return {
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
    async getComment(commentID) {
      const response = await fetch("http://localhost:4000/comments/get/" + commentID);
      const fetchedData = await response.json();
      this.commentData = fetchedData;
    },
    delCommentEmit() {
      this.$emit("delCommentEmit", this.commentData._id);
    },
    likeCommentEmit() {
      this.commentData.C_likes++
      this.$emit("updCommentEmit", this.commentData);
    }
  },
  created() {
    this.getComment(this.commentID);
    console.log(this.commentID);
  },
  emits: ["delCommentEmit", "updCommentEmit"],
};
</script>

<script setup>

defineProps({
  commentID: {
    type: String,
    required: true,
  },
});
</script>
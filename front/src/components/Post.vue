<template>
  <div class="postBox" id="postbox">

    <div class="topRow">

    <div class="postUser">

      <div v-if="postProp.P_status == 'Speaker'" class="avatar_speaker">
        <div class="avatar_inner">{{ postProp.P_initial }}</div>
      </div>

<div v-else class="avatar_attendee">
        <div class="avatar_inner">{{ postProp.P_initial }}</div>
      </div>

      <div class="userInfo">
        <h1>{{ postProp.P_fname }} {{ postProp.P_lname }}</h1>
        <h2>{{ postProp.P_status }}</h2>
      </div>
    </div>

<div @click="delPostEmit" class="deletePost">
<h5>x</h5>
</div>
    </div>

    <div class="postText">
      <h3>{{ postProp.P_content }}</h3>
    </div>

<div class="bottomRow">

  

      <div @click="likePostEmit" class="likeNumbers">
        <img class="likeIcon" src="ICONS/thumb_up_white_24dp.svg" alt="likes" />
        <h4 v-if="postProp.P_likes" >{{ postProp.P_likes }}</h4>
        <!-- <h4 v-if="postProp.P_likes > 1">s</h4> -->
      </div>

      <!-- <div v-if="postProp.P_likes" class="spaceNumbers"></div> -->

      <div v-if="postProp.P_comments" class="commentNumbers">
        <img
          class="commentIcon"
          src="ICONS/question_answer_white_24dp.svg"
          alt="likes"
        />
        <h4>{{ postProp.P_comments }}</h4>
        <!-- <h4 v-if="postProp.P_comments > 1">s</h4> -->
      </div>
    <!-- </div> -->

    <div @click="showPostReply" class="addComment">
      <h2>ADD COMMENT</h2>
    </div>

    </div>
<div :class="{hidden: ReplyBoxOff}">
<PostReply @cancelTrigger="cancelPostReply" :postDataProp="postProp" />
</div>

<div v-if="postProp.P_postComments[0]" >
<Comment 
v-for="commentID in postProp.P_postComments"
:key="commentID"
:commentID="commentID"
@delCommentEmit="delComment"
@updCommentEmit="updateComment"
/>
</div>

  </div>
</template>

<style scoped>
.postBox {
  position: relative;
  top: 245px;
  margin: 3vw;
  border: solid 5px #63b798;
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
  justify-content: space-between;
  align-items: center;
  /* border: solid 1px blue; */
}

.deletePost{
  margin-right: 5vw;
}

.postUser {
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

.postText {
  margin: 2vw 2vw 3vw 4vw;
}

.iconNumbers {
  display: flex;
  justify-content: start;
  /* margin: 0vw 4vw 4vw; */
  border: solid 1px red;
}

.likeNumbers {
  display: flex;
  justify-content: start;
}
.spaceNumbers {
  width: 4vw;
}
.commentNumbers {
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
  /* margin-right: 5vw; */
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

.commentIcon {
  height: 17.5px;
  margin-right: 1vw;
}
</style>

<script>
export default {
data() {
    return { 
      commentsData: [],
      ReplyBoxOff: true,
    };
  },
  methods: {
    delPostEmit() {
      this.$emit("delPostEmit", this.postProp._id);
    },
    likePostEmit() {
      this.postProp.P_likes++
      this.$emit("updPostEmit", this.postProp);
    },
    showPostReply(){
this.ReplyBoxOff=false;
    },
    cancelPostReply(){
this.ReplyBoxOff=true;
    },
    async fetchAPI() {
      const response = await fetch("http://localhost:4000/comments/");
      const fetchedData = await response.json();
      this.commentsData = fetchedData;
    },
    async delComment(commentID) {
      const fetchURL = "http://localhost:4000/comments/delete/" + commentID;
      const response = await fetch(fetchURL, { method: "DELETE" });
      const fetchedData = await response.json();
      this.fetchAPI();
      const arrayValue=this.postProp.P_postComments.indexOf(commentID);
      console.log(arrayValue);
      const postPropData=this.postProp;
      console.log(postPropData.P_postComments);
      postPropData.P_postComments.splice(arrayValue,1);
      console.log(postPropData.P_postComments);
      this.updatePost(postPropData);
    },
    async updateComment(commentData) {
      const fetchURL = "http://localhost:4000/comments/update/" + commentData._id;
      const response = await fetch(fetchURL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentData),
      });
      const fetchedData = await response.json();
      this.fetchAPI();
    },
    async updatePost(postData) {
      const fetchURL = "http://localhost:4000/posts/update/" + postData._id;
      const response = await fetch(fetchURL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      const fetchedData = await response.json();
      this.fetchAPI();
    }
  },
  created() {
    this.fetchAPI();
  },
  emits: ["delPostEmit", "updPostEmit"],
};
</script>

<script setup>
import Comment from "./Comment.vue";
import PostReply from "./PostReply.vue"

defineProps({
  postProp: {
    type: Object,
    required: true,
  },
});
</script>
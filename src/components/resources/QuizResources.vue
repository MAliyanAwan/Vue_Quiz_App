<template>
  <div class="container-app">
    <div class="container-quiz">
      <div class="question-field" :style="{ width: questionBar + '%' }"></div>
      <div class="quiz-header">
        <h1>Question {{ b }} of {{ questions.length }}</h1>
      </div>
      <div
        class="category-ques"
        v-for="(element, index) in questions.slice(a, b)"
        :key="index">        
        <p v-if="this.isComplete ? '' : element.category" >
        Category: {{ element.category }}</p>
      </div>
      <div
        class="main-quiz"
        v-for="(element, index) in questions.slice(a, b)"
        :key="index"
        v-show="quiz"
      >
        <div class="question-box">
          <h3 v-if="category">{{ element.question }}</h3>
        </div>
        <div class="options">
          <ul>
            <li
              v-for="(item, index) in element.options"
              :key="index"
              :class="select ? check(item) : ''"
              @click="SelectResponse(item)"
            >
              {{ item.option }}
            </li>
          </ul>
        </div>
        <div class="result">
          <h2>{{ res }}</h2>
          <button class="btnnext" @click="nextQuestion" v-show="btnNextShow">
            Next Question
          </button>
        </div>
      </div>
      <div class="quiz-footer">
        <div class="current-score">
          <p>Score: {{ score }}%</p>
          <p>Max Score: {{ maxScore }}%</p>
        </div>

        <div class="value-bar">
          <div class="max-value-bar" :style="{ width: maxScore + '%' }"></div>
          <div
            class="incorrect-value-bar"
            :style="{ width: wrongAnsBar + '%' }"
          ></div>
          <div class="correct-value-bar" :style="{ width: score + '%' }"></div>
        </div>
      </div>
      <div class="box-score" v-if="scoreShow">
        <h2>You score is</h2>
        <h2>{{ score }}/100</h2>
        <div @click="restartQuiz" class="btn-restart">
          <button>Restart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: "",
      a: 0,
      b: 1,
      select: false,
      res: "",
      questionBar: 5,
      score: 0,
      maxScore: 100,
      btnNextShow: false,
      wrongAnsBar: 0,
      maxAnsBar: 100,
      quiz: true,
      scoreShow: false,
      gameOver: false,
      category: true,
      isComplete: false,
    };
  },
  created() {
    this.questions = this.$store.getters["questions/getQuestions"];
  },

  methods: {
    questionBarVal() {
      this.questionBar = this.questionBar + 5;
      if (this.questionBar > 100) {
        this.questionBar = 100;
        this.gameOver = true;
      }
    },
    wrongAnsBarVal() {
      this.wrongAnsBar = this.wrongAnsBar + 5;
    },
    SelectResponse(ans) {
      this.select = true;
      if (ans.correct) {
        this.score = this.score + 5;
        this.res = "Correct!";
        this.btnNextShow = true;
      } else {
        this.maxScore = this.maxScore - 5;
        this.res = "Sorry!";
        this.btnNextShow = true;
        this.wrongAnsBar = this.wrongAnsBar + 5;
      }
    },
    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      if (this.questions.length - 1 == this.a) {
        this.scoreShow = true;
        this.quiz = false;
        this.isComplete = true;
      } else {
        this.a++;
        this.b++;
        this.select = false;
        this.questionBarVal();
        this.res = "";
        this.btnNextShow = false;
      }
    },
    restartQuiz() {
      Object.assign(this.$data, this.$options.data());
    },
  },
};
</script>

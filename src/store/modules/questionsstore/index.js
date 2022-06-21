import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      questions: [
        {
          category: 'History of Pakistan',
          question: 'Who was the founder of Pakistan?',
          options: [
            { option: 'Imran Khan', correct: false },
            { option: 'Rana SanaUllah', correct: false },
            { option: 'Muhammad Ali Jinnah', correct: true },
            { option: 'Allama Iqbal', correct: false },
          ]
        },
        {
          category: 'Histoy of Pakistan',
          question: 'Who wrote the National Anthem of Pakistan?',
          options: [
            { option: 'Atif Aslam' },
            { option: 'Ali Zafar' },
            { option: 'Chaudary Rehmat Ali', correct: true },
            { option: 'Nusrat Fateh Ali Khan' },
          ]
        },
        {
          category: 'General Knowledge',
          question: 'when and where was al-khwarizmi born?',
          options: [
            { option: '612' },
            { option: '945' },
            { option: '847' },
            { option: '780', correct: true },
          ]
        },
        {
          category: 'Mathamtician',
          question: 'Who invented algebra 2?',
          options: [
            { option: 'Musa al-Khwarizmi', correct: true },
            { option: 'Fawad Chaudary' },
            { option: 'Bill Gates' },
            { option: 'Ameer Hamza' },
          ]
        }, {
          category: 'General Knowledge',
          question: 'Grand Central Terminal, Park Avenue, New York is the worlds',
          options: [
            { option: 'highest railway station' },
            { option: 'longest railway station' },
            { option: 'largest railway station', correct: true },
            { option: 'None of the above' },
          ]
        },
        {
          category: 'Science',
          question: 'Entomology is the science that studies',
          options: [
            { option: 'Insects', correct: true },
            { option: 'Behavior of human beings' },
            { option: 'The origin and history' },
            { option: 'The formation of rocks' },
          ]
        },
        {
          category: 'World History',
          question: 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
          options: [
            { option: 'Asia' },
            { option: 'Europe' },
            { option: 'Australia' },
            { option: 'Africa', correct: true },
          ]
        },
        {
          category: 'World History',
          question: 'Garampani sanctuary is located at',
          options: [
            { option: 'Junagarh, Gujarat' },
            { option: 'Kohima, Nagaland' },
            { option: 'Gangtok, Sikkim' },
            { option: 'Diphu, Assam', correct: true },
          ]
        },
        {
          category: 'General Knowledge',
          question: 'For which of the following disciplines is Nobel Prize awarded?',
          options: [
            { option: 'Physics and Chemistry' },
            { option: 'Physiology or Medicine' },
            { option: 'All of the above', correct: true },
            { option: 'Literature, Peace and Economics' },
          ]
        },
        {
          category: 'General Knowledge',
          question: 'Hitler party which came into power in 1933 is known as',
          options: [
            { option: 'Nazi Party', correct: true },
            { option: 'Labour Party' },
            { option: 'Ku-Klux-Kla' },
            { option: 'Democratic Party' },
          ]
        },
        {
          category: 'Science',
          question: 'Exposure to sunlight helps a person improve his health because',
          options: [
            { option: 'the infrared light kills bacteria in the body', correct: true },
            { option: 'resistance power increases' },
            { option: 'the pigment cells in the skin get stimulated and produce a healthy tan' },
            { option: 'the ultraviolet rays convert skin oil into Vitamin D' },
          ]
        },
        {
          category: 'General Knowledge',
          question: 'Golf player Vijay Singh belongs to which country?',
          options: [
            { option: 'USA' },
            { option: 'Fiji' },
            { option: 'India', correct: true },
            { option: 'Uk' },
          ]
        },
        {
          category: 'General Knowledge',
          question: 'Guarantee to an exporter that the importer of his goods will pay immediately for the goods ordered by him, is known as',
          options: [
            { option: 'laissezfaire' },
            { option: 'inflation' },
            { option: 'None of the above' },
            { option: 'Letter of Credit (L/C)', correct: true },
          ]
        },
        {
          category: 'General Knowledge',
          question: 'First Afghan War took place in',
          options: [
            { option: '1839', correct: true },
            { option: '1876' },
            { option: '1845' },
            { option: '1832' },
          ]
        },
        {
          category: 'History',
          question: 'First China War was fought between',
          options: [
            { option: 'China and France' },
            { option: 'China and Britain', correct: true },
            { option: 'China and Egypt' },
            { option: 'China and Greek' },
          ]
        },
        {
          category: 'General Knowledge',
          question: 'Guwahati High Court is the judicature of',
          options: [
            { option: 'Nagaland' },
            { option: 'Arunachal Pradesh' },
            { option: 'Assam' },
            { option: 'All of the above', correct: true }
          ]
        },
        {
          category: 'Science',
          question: 'Friction can be reduced by changing from',
          options: [
            { option: 'dynamic to static' },
            { option: 'sliding to rolling', correct: true },
            { option: 'rolling to sliding' },
            { option: 'potential energy to kinetic energy' },
          ]
        },
        {
          category: 'Science',
          question: 'Filaria is caused by',
          options: [
            { option: 'Bacteria' },
            { option: 'Protozoa' },
            { option: 'Virus' },
            { option: 'Mosquito', correct: true },
          ]
        },
        {
          category: 'General Knowledge',
          question: 'Film and TV institute of India is located at',
          options: [
            { option: 'Pune (Maharashtra)' },
            { option: 'Rajkot (Gujarat)' },
            { option: 'Pimpri (Maharashtra)', correct: true },
            { option: 'Perambur (Tamilnadu)' },
          ]
        },
        {
          category: 'Science',
          question: 'The ozone layer restricts',
          options: [
            { option: 'Visible light' },
            { option: 'Ultraviolet radiation', correct: true },
            { option: 'Infrared radiation' },
            { option: 'X-rays and gamma rays' },
          ]
        },
      ]
    }
  },
  mutations,
  getters,
  actions
}
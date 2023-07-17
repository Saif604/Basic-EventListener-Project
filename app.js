const motivate = [
    'Believe in yourself, for within you lies infinite potential. Embrace your strengths, conquer your doubts. With self-belief as your guiding light, you can achieve greatness and conquer any obstacle that comes your way.',
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",

"Self-belief is the foundation of success. Believe in your abilities, take action with confidence, and the world will open doors for you.",

"The biggest difference between successful people and unsuccessful people is belief in themselves.",

"Self-belief and hard work will always earn you success.",

"Your belief in yourself is more powerful than any limitation imposed by others.",

"Trust yourself. Create the kind of self that you will be happy to live with all your life. Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.",

"Believe in yourself and there will come a day when others will have no choice but to believe with you.",

"Self-belief is the fuel that drives you to achieve your dreams. Without it, even the most talented individuals remain stagnant.",
"Believe in your potential, and the world becomes limitless in its possibilities.",

"The only person who can truly hold you back is yourself. Believe in your abilities, persevere, and you will achieve greatness."
];

const btn = document.querySelector(".hero-btn");
const para = document.querySelector('.para');

btn.addEventListener('click',function(){
    const rand = Math.floor(Math.random()*11);
    para.textContent = motivate[rand];
})

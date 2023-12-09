import {additionSectionToType, introTextToType} from "./utils/constants.js";
import {startAnimationForSkillLabel} from "./utils/helper.js";

const additionsInfoText = document.querySelector('.additions-info__text');
const introText = document.querySelector('.intro_text');

const typeText = (index = 0, element, text = '') => {
    if (element && index < text.length) {
        element.textContent += text[index];
        setTimeout(() => typeText(index + 1, element, text), 20);
    }
}
const onEntry = (entry, observer) => {
    entry.forEach(item => {
        if (item.isIntersecting) {
            item.target.id = 'showed'
            switch (item.target) {
                case additionsInfoText:
                    typeText(0, additionsInfoText, additionSectionToType)
                    observer.unobserve(item.target)
                    break
                case introText:
                    typeText(0, introText, introTextToType)
                    observer.unobserve(item.target)
                    break
            }
        }
        if (!item.isIntersecting) {
            item.target.id = ''
        }
    })
}

let observer = new IntersectionObserver(onEntry, {threshold: [0.5]})

const animatedElements = document.querySelectorAll('.animated')
animatedElements.forEach(el => observer.observe(el))

startAnimationForSkillLabel()

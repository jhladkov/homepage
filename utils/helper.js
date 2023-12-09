
export const startAnimationForSkillLabel = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const labels = document.querySelectorAll('.skill__label');
        labels.forEach((label, index) => {
            const duration = 0.5 + index * 0.1;
            label.style.animation = `scaleAnimation ${duration}s ease-out forwards`;
        });
    });

}
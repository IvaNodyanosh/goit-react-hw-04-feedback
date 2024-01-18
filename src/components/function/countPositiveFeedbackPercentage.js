export const countPositiveFeedbackPercentage = (total, { good }) => {
    if (total === 0) {
        return 0;
    }
    return (good / total * 100).toFixed(0);
}
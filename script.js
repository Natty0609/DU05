const selectPlan = (plan) => {
    document.querySelectorAll('.plan').forEach((el) => {
        el.classList.remove('plan--selected')
    })
    document.querySelector("#plan" + plan).classList.add('plan--selected')
}
selectPlan(3);
// selectPlan(2);
// selectPlan(1);
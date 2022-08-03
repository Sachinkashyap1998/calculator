const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


grandParent.addEventListener("click", () => {
console.log('grand parent');
});

parent.addEventListener("click", () => {
    console.log('parent');
    });
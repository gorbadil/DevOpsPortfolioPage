function ChangeToDark(root) {
    root.style.setProperty(
        "--main-bg",
        getComputedStyle(root).getPropertyValue("--dark-bg")
    );
    root.style.setProperty(
        "--main-text",
        getComputedStyle(root).getPropertyValue("--dark-text")
    );
    root.style.setProperty(
        "--main-shadow",
        getComputedStyle(root).getPropertyValue("--dark-shadow")
    );
}

function ChangeToLight(root) {
    root.style.setProperty(
        "--main-bg",
        getComputedStyle(root).getPropertyValue("--light-bg")
    );
    root.style.setProperty(
        "--main-text",
        getComputedStyle(root).getPropertyValue("--light-text")
    );
    root.style.setProperty(
        "--main-shadow",
        getComputedStyle(root).getPropertyValue("--light-shadow")
    );
}

export { ChangeToDark, ChangeToLight };
export const checkValidData = (name, email, password, isSignIn = true) => {
    if (!isSignIn) {
        if (!name || name.trim().length === 0) return "Please enter your full name.";
        const isNameValid = /^[a-zA-Z ]{2,}$/.test(name.trim());
        if (!isNameValid) return "Name must contain only letters and spaces (min 2 characters).";
    }

    if (!email || email.trim().length === 0) return "Please enter your email address.";
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
    if (!isEmailValid) return "Please enter a valid email address.";

    if (!password || password.trim().length === 0) return "Please enter your password.";
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,16}$/.test(password);
    if (!isPasswordValid) {
        return "Password must be 6–16 characters, include at least one letter and one number.";
    }

    return null;
};

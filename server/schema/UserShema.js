import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    logindate: {
        type: Date,
        default: () => Date.now()
    },
});

const User = mongoose.model("User", userSchema);

export default User;

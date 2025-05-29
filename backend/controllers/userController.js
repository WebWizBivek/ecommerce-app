const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const sendOtp = require("../helper/otp");
const User = mongoose.model("User", require("../models/userSchema"));

// Signup Controller
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Something is missing" });
        }

        function generateOTP() {
            return Math.floor(1000 + Math.random() * 9000);
        }

        const otp = generateOTP();
        console.log(otp); // e.g., 4723


        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Signin Controller
const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Something is missing" });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User doesn't exist" });

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate 4-digit OTP
        const otp = Math.floor(1000 + Math.random() * 9000);

        // Set OTP expiration (e.g., 5 minutes)
        const otpExpires = Date.now() + 5 * 60 * 1000;

        // Store OTP and expiry in DB (assuming user schema has `otp` and `otpExpires`)
        user.otp = otp;
        user.otpExpires = otpExpires;
        await user.save();

        // TODO: Send OTP via email/SMS here
        await sendOtp(user.email, otp);

        return res.status(200).json({
            message: "OTP sent to your registered email/phone",
            userId: user._id
        });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};


// Edit Profile Controller
const editProfile = async (req, res) => {
    try {
        const { name, email, profilePic } = req.body;
        const userId = req.user.id; // Assuming user ID is extracted from middleware

        let user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.name = name || user.name;
        user.email = email || user.email;
        user.profilePic = profilePic || user.profilePic;

        await user.save();

        res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { signup, signin, editProfile };
import mongoose from 'mongoose';
const { Schema } = mongoose;

// Donation Schema
const donationSchema = new Schema({
    amount: {
        type: Number,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    donateUser: {
        name: { type: String, required: false },
        email: { type: String, required: false },
        phone: { type: String, required: false },
    },
    temple: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Temple',
        required: false,
    },
    // paymentMethod: {
    //     type: String,
    //     required: false,
    //     enum: ['credit card', 'debit card', 'paypal', 'bank transfer'],
    // },
    // status: {
    //     type: String,
    //     required: false,
    //     enum: ['pending', 'completed', 'failed'],
    //     default: 'pending',
    // },
    razorpay_order_id: {
        type: String,
        required: true,
    },
    razorpay_payment_id: {
        type: String,
        required: false,
    },
    razorpay_signature: {
        type: String,
        required: false,
    },
});

// Export the Donation model
const Donation = mongoose.model('Donation', donationSchema);
export default Donation;

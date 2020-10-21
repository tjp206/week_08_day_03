<template lang="html">
    <form v-on:submit="addBooking" method="post" id="bookings-form">
        <h2>Create A New Booking:</h2>
        <div class="formWrap">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required />
        </div>
        <div class="formWrap">
            <label for="email">Email:</label>
            <input type="text" id="email" v-model="email" required />
        </div>
        <div class="formWrap">
            <label for="status">Checked In:</label>
            <input type="boolean" id="status" v-model="status" />
        </div>

        <input type="submit" value="Save" id="save" />
    </form>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
    name: 'bookings-form',
    data() {
        return {
            name: '',
            email: '',
            status: false
        }
    },
    methods: {
        addBooking(e) {
            e.preventDefault()
            const booking = {
                name: this.name,
                email: this.email,
                status: this.status
            }
            BookingsService.postBooking(booking)
            .then(res => eventBus.$emit('booking-added', res))
        }
    }
}
</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>
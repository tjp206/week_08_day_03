<template lang="html">
    <div class="booking">
        <h2>Guest Name: {{ booking.name }}</h2>
        <h3>Email: {{ booking.email }}</h3>
        <button v-if="!booking.status" v-on:click="updateBooking" >Checked In: {{ booking.status }}</button>
        <p v-if="booking.status"><b>Checked In</b></p>

        <button type="button" v-on:click="deleteBooking">Delete Booking</button>
    </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
    name: 'booking',
    props: ['booking'],
    methods: {
        deleteBooking() {
            BookingsService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        },
        updateBooking() {
            let updatedStatus = {
                status: true
            }
            BookingsService.updateBooking(updatedStatus, this.booking._id)
            .then(() => eventBus.$emit('booking-updated', this.booking._id))
    
        }
    },
}
</script>

<style lang="css" scoped>
.booking {
    display: flex;
    flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-evenly;
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #F55536;
}
</style>
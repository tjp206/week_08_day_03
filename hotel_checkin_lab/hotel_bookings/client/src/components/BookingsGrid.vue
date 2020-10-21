<template lang="html">
    <div id="bookingsGrid">
        <booking v-for="booking in bookings" :booking="booking"></booking>
    </div>
  
</template>

<script>
import { eventBus } from '@/main.js'
import Booking from './Booking';

export default {
    name: 'bookings-grid',
    props: ['bookings'],

    components: {
        'booking': Booking
    },

}
</script>

<style lang="css" scoped>
#sightingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

h2 {
	padding: 0;
	margin: 0;
}
</style>
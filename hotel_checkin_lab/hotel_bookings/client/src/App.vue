<template>
  <div id="app">
    <h1>Hero Hotel Group</h1>
    <bookings-form ></bookings-form>
    <bookings-grid :bookings="bookings"></bookings-grid>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'
import BookingsGrid from './components/BookingsGrid.vue'
import BookingsForm from './components/BookingsForm.vue'


export default {
  name: 'App',
  components: {
    'bookings-grid': BookingsGrid,
    'bookings-form': BookingsForm,
  },
  
  data() {
    return {
      bookings: [],
    };
  },
  
  mounted() {
    this.fetchBookings();

    eventBus.$on('booking-added', (booking) => {
	  this.bookings.push(booking)
		}),

    eventBus.$on('booking-deleted', (id) => {
		  let index = this.bookings.findIndex(booking => booking._id === id)
		  this.bookings.splice(index, 1)
    })

    eventBus.$on('booking-updated', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings[index].status = true
    })

  },

  methods: {
    fetchBookings() {
      BookingsService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

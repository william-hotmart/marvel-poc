import { Template } from 'meteor/templating'
import '../charactersItem/charactersItem.js'
import './charactersList.html'

Template.charactersList.onCreated(() => {
    console.log('Created charactersList')
})
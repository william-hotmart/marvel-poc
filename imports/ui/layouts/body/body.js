import { Template } from 'meteor/templating'
import { get } from '../../../api/api.js'
import '../../components/charactersList/charactersList.js'
import './body.html'

Template.body.onCreated(() => {
    recoverHeroes()
})

const recoverHeroes = async () => {
    try {
        const { data: { results } } = await get('v1/public/characters')
        return results
    } catch(error) {
        return []
    }
}
export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    }
    // When connecting to firebase, make sure to add .json to the end of the link
    const response = await fetch(`https://vue-http-demo-9b04d-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
      method: 'PUT', // Put means that it will overide the existing data or create new data if the data does not exist
      body: JSON.stringify(coachData)
    })

    // const responseData = await response.json()

    if (!response.ok) {
      // error ...
    }
    context.commit('registerCoach', {
      ...coachData,
      id: userId
    })
  }
}
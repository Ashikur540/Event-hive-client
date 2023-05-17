

// get all costumes data
export const getCostumes = async () => {

        const response = await fetch(`${process.env.REACT_APP_API_URL}/costumes`);
        const data = await response.json()
        return data
      
  }

 // get all makeupservice data 
export const getMakeupArtists = async () => {

        const response = await fetch(`${process.env.REACT_APP_API_URL}/makeup-artists`);
        const data = await response.json()
        return data
      
  }
 // get all makeupservice data 
export const getMakeupArtist = async (artistId) => {

        const response = await fetch(`${process.env.REACT_APP_API_URL}/makeup-artists/${artistId}`);
        const data = await response.json()
        return data
      
  }
//   get single costumes
export const getCostume = async (costumeId) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/costumes/${costumeId}`);
        const data = await response.json()
        return data
      
  }
// export const getCostumes = async homeData => {
//     const url = `${process.env.REACT_APP_API_URL}/costumnes`
  
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(homeData),
//     })
  
//     const data = await response.json()
  
//     return data
//   }

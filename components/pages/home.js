import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import axios from 'axios'


function url(city){
return( "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b862e72544c6c263c3631cf238fcb746")

}

export default function home() {
    
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);
    const [data7, setData7] = useState([]);
    const [data8, setData8] = useState([]);
    const [error, setError] = useState(null);
   

        // function Data() {
        //     const [data, setData] = useState([])

        //     useEffect(() => {
        //         (async () => {
        //             const data1 = await axios.get(url('Mexico'))
        //             .then((res) => {
        //               if(res.statusText != "OK"){
        //                 throw Error('Could not fetch data from resource')
        //               }
        //               // console.log(res.data)
        //               return res.data;
        //             })
                                            
        //             const data2 = await axios.get(url('Dhaka'))
        //             .then((res) => {
        //               if(res.statusText != "OK"){
        //                 throw Error('Could not fetch data from resource')
        //               }
        //               // console.log(res.data)
        //               return res.data;
        //             })
        //             setData({data2})
        //             console.log(data1);
        //             console.log(data2);
        //         })()
        //     }, [])

        //     return JSON.stringify(data)
        // }

            
        useEffect(() => {
            const abortCont = new AbortController();

            setTimeout(() => {
              fetch(url('Mexico'), { signal: abortCont.signal })
              .then((res) => {
                  if(!res.ok){
                  throw Error('Could not fetch data from resource')
                }
                return res.json();
              })
              .then(data => {
                setData(data);
                setLoading(false);
                setError(null);
                console.log(data); // delete it later
              })
              .catch(err => {
                if(err.name === 'AbortError'){
                  console.log('Fetch Aborted')
                  console.log(err.message);   // delete it later
                }else {
                  setError(err.message);
                  console.log(err.message);   // delete it later
                  setLoading(false);
                }
              })
            }, 100);
              
            return () => abortCont.abort();
        }, []);
 {/* 

        useEffect(() => {
            fetch(url("Dhaka")).then((response) => response.json())
            .then((data1) => console.log(data1.name))  //setData(json)
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }, [])
      
        
        useEffect(() => {
            fetch(url("Washington DC")).then((response) => response.json())
            .then((data2) => console.log(data2.name) )   //setData2(json)
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }, [])
        
        useEffect(() => {
          fetch(url("New York")).then((response) => response.json())
          .then((data3) => console.log(data3.name) )   //setData3(json)
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
        }, [])
              
        useEffect(() => {
          fetch(url("Singapore")).then((response) => response.json())
          .then((data4) => console.log(data4.name) )   //setData4(json)
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, [])
      
        useEffect(() => {
          fetch(url("Delhi")).then((response) => response.json())
          .then((data5) => console.log(data5.name) )   //setData5(json)
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, [])
        
        useEffect(() => {
          fetch(url("Bangkok")).then((response) => response.json())
          .then((data6) => console.log(data6.name) )   //setData6(json)
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, [])
  
        useEffect(() => {
          fetch(url("Kolkata")).then((response) => response.json())
          .then((data7) => console.log(data7.name) )   //setData7(json)
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, [])

      useEffect(() => {
        fetch(url("Thailand")).then((response) => response.json())
        .then((data8) => console.log(data8.name) )   //setData8(json)
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      }, []) 
      */}



    return (
       <View style={styles.container} >
            <View style={styles.header}>
                <Text>Weather App</Text>
            </View>
  
            <View style={styles.hero}>
                <Text style ={styles.heroDetail}>{!isLoading && data.main.temp}</Text>
                <Text>{!isLoading && data.name}</Text>
                <Text>{!isLoading && data.weather[0].main}</Text>
              </View>

      
   {/*    
           
                <View style={styles.hero}>
                <Text style ={styles.heroDetail}>{!isLoading && data1.main.temp}</Text>
                <Text>{!isLoading && data1.name}</Text>
                <Text>{!isLoading && data1.weather[0].main}</Text>
              </View>
                    
            <View style={styles.hero}>
                <Text style ={styles.heroDetail}>{!!!isLoading && data1.main.temp}</Text>
                <Text>{!!!isLoading && data2.name}</Text>
                <Text>{!!!isLoading && data1.weather[0].description}</Text>
              </View> 
              
  
            
              <View style={styles.hero}>
                {!isLoading && data3.name}
              </View>            
                
                <View style={styles.hero}>
                {!isLoading && data4.name }
                </View>
                
              <View style={styles.hero}>
                {!isLoading && data5.name}
              </View>            
                
                <View style={styles.hero}>
                {!isLoading && data6.name}
                </View>
                
              <View style={styles.hero}>
                {!isLoading && data7.name}
              </View>            
                
                <View style={styles.hero}>
                {!isLoading && data8.name}
                </View> */}
        </View>
    )
}



const styles = StyleSheet.create({
  
    header: {
      padding: 20,
      // margin: "auto",
      maxWidth: "600px",
      height: "10px",
      backgroundColor: '#00804A',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

  

    hero: {
      flex : 1,
      borderRadius: "10px",
      // margin: "auto",
      padding: 20,
      // margin: "5px",
      maxWidth: "600px",
      height: "100px",
      backgroundColor: '#D1D5DB',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
    },

    heroDetail: {
      textAlign: "right",
      alignSelf: "flex-end",
      // width: "50%"
      // height: "50px"
      
    },

    heroTemp: {
      alignSelf: "flex-end",
    },

    inline: {
      // display: "none",
    }
    
    

   
  });
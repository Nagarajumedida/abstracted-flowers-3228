import React, { useEffect, useState } from 'react'
import { Box, Button, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom'
import "./FilterSort.css"


export const FilterSort = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [sortBy, setSortBy] = useState(searchParams.getAll('sortBy') || "")

    // console.log(searchParams.getAll("category"))

    const [categoryType, setCategoryType] = useState(searchParams.getAll("category") || [])

    // const[genderType,setGenderType] = useState(searchParams.getAll("gender") || [])


    const [showcategory, setShowcategory] = useState(false)
    const [showprice, setShowprice] = useState(false)



    const handleFilter = (e) => {

        const option = e.target.value;
      console.log("option---",option)

        let newCategory = [...categoryType];
        if (newCategory.includes(option)) {
            newCategory.splice(newCategory.indexOf(option),1)
        } else {
            newCategory.push(option)
        }

        setCategoryType(newCategory)
    }
    // console.log(categoryType)

    const handleSortBy = (e) => {
        setSortBy((e.target.value))
    }
    useEffect(() => {
        const params = {};
        categoryType && (params.category = categoryType);
        // genderType && (params.gender = genderType) 
        // sortBy && (params.sortBy = sortBy);
         setSearchParams(params)

    }, [categoryType, setSearchParams, sortBy])
    console.log(categoryType)

    return (<>
        <div className='filter'>

            

            {/* <Box w='80%' m='auto' ><Text fontSize='36px' fontWeight='bold' >Filters</Text></Box> */}
            <h2>Filters</h2>
            <div className='filter-1' style={{ marginTop: '30px' }}>
                {/* <h4>Categories</h4> */}
                <Button onClick={() => setShowcategory(!showcategory)} className='buttp'>{showcategory ? 'Categories ↑' : 'Categories ↓'}</Button>
                {showcategory && <Box>
                    <div className='filter-2'>
                        <input type="checkbox" value="mobile" defaultChecked={categoryType.includes("mobile")} onChange={handleFilter} />
                        <label>Mobiles</label>
                    </div>

                    <div className='filter-2'>
                        <input type="checkbox" value="television" defaultChecked={categoryType.includes("television")} onChange={handleFilter} />
                        <label>Televisions</label>
                    </div>

                    <div className='filter-2'>
                        <input type="checkbox" value="Headset" defaultChecked={categoryType.includes("Headset")} onChange={handleFilter} />
                        <label>Headsets</label>
                    </div>

                    <div className='filter-2'>
                        <input type="checkbox" value="Home" defaultChecked={categoryType.includes("Home")} onChange={handleFilter} />
                        <label>Home</label>
                    </div>

                    <div className='filter-2'>
                        <input type="checkbox" value="computers" defaultChecked={categoryType.includes("computers")} onChange={handleFilter} />
                        <label>Computers</label>
                    </div>

                    <div className='filter-2'>
                        <input type="checkbox" value="camera" defaultChecked={categoryType.includes("camera")} onChange={handleFilter} />
                        <label>Cameras</label>
                    </div>

                    <div className='filter-2'>
                        <input type="checkbox" value="kitchen" defaultChecked={categoryType.includes("kitchen")} onChange={handleFilter} />
                        <label>Kitchen</label>
                    </div>

                    <div className='filter-2'>
                        <input type="checkbox" value="personal" defaultChecked={categoryType.includes("personal")} onChange={handleFilter} />
                        <label>Personal</label>
                    </div>

                    <div className='filter-2'>
                        <input type="checkbox" value="accessories" defaultChecked={categoryType.includes("accessories")} onChange={handleFilter} />
                        <label>Accessories</label>
                    </div>
                </Box>
                }
            </div>

            <div className='filter-1'>
                {/* <h4>Price</h4> */}
                <Button onClick={() => setShowprice(!showprice)} className='buttp'>{showprice ? 'Price ↑' : 'Price ↓'}</Button>
                <div onChange={handleSortBy}>
                     {showprice && <Box>
                    <div className='filter-2'>
                        <input type="radio" name="sortBy" value="asc" defaultChecked={sortBy === 'asc'} />
                        <label>Low - High</label>
                    </div>

                    <div className='filter-2'>
                        <input type="radio" name="sortBy" value="desc" defaultChecked={sortBy === 'desc'} />
                        <label>High - Low</label>
                    </div>
                    </Box>
                }

                </div>
               
            </div>
       
        </div>
        
        </>
    )
}


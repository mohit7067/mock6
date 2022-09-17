
let cont =document.querySelector(".carscontainer")

async function Getdata(){
     
    try {
         let res= await fetch('https://pacific-plains-53138.herokuapp.com/cars')
         let data=await res.json()

         Append(data)
         Sort(data)
         Filter(data)
    } catch (err) {
        console.log(err)
    }
}

Getdata()

function Append(data){
  cont.innerHTML=""
    data.map((el)=>{
        
        let div=document.createElement('div')
        div.id=el.id

        let img=document.createElement("img")
        img.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwA3QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYHAAj/xABHEAACAQMDAgMFBgQCBggHAAABAgMABBEFEiExQQYTURQiYXGBMpGhscHRByNCUhXwFjM0YnJzJIKSlKLS4eJEU1RVVsLx/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAIBAwQFBv/EACoRAAICAQMDAwQCAwAAAAAAAAABAgMRBBIhEzFRFCJBBTJhkXGBUrHR/9oADAMBAAIRAxEAPwARMbcukMiyoJV3hEbbuycBmbH4/wC7RhIDYwmNZhG5bapk94t6c/IDrnNZvUtSuPbjZW0CxRt7pVjzGcnIB446dasatrpt7+IJAzyRICY3ORuJwTwT24znvXnXVJpJG6M485JJ7u3tUdrmS5N2B7zEDC856dR8qsQyQS2wktC9wpGF3oched2T1znJoJp3mPOs8km6K7cpKmN+cHk80U1PUIkiWCztzvUezxdvLJ7enOPzppQw1Fdxa7Nj6iKt7cxreQwPaxtJs2SKB0U88HPXOazsFgZLqbercg7AvJJBHQH6c0XuIYpYojOzJcqCoOBtlK9v1yf2oQJLiC6FwrHzFYEe9nd8MCtdSwsRHsvjY05jfZ723tlnvmTbLJ5QjbrnHXHXAqjIk78hRJGCARjaDV24uhKu+7a4knJ+yze6p7N6/QffT9I0n/HL2TzbySJAQ8r56k+gPWtKkox3SMssSliJS0y5e3mkjKLsYcjHJwD3qWa6DxwtM0ilUwkIXAAxwQewz2x2o/eeH7C2LSw3bGGBtk4+0QMgZ+eSfvocILO91hfZYxHbrIoG4YDKDySD3+7tURthN8Imdcq1yy8sk9ppM0EzSZDACRiME46DPJGSc1VbWEk09I5d22Nw+9cnnPHw6Z61akkbUb6eaVkWJWkXagAzkHqT1PPX4VQmsrW3iVS8jI5XORjnPTn4d8Y4pMRzyJlo9Z+QkwSG4kjLR+9IZcZA594Y7DtUMmpXVvK6lo22AKqsnVc9geh7/U0TEVjZWs58l3bIC71GHGfU9elC7iHdLGHkKmVN4QRnGTnA/H8aeOG2GcFaHWr8xiDzSFI2qoUbcnOWI9cHtVldUjnkSHUVMsceQ7qx3n5dqrLYXDnENncyMcfYgJA9ecVf0/QNQWQmTS7t4HU5Hl4IPbt6gc4q7ovuokdeWGnLhmhS5tIoFFsQoJ3ctz2yBnv25qSa4ntvJchZDK4SJVHuxgcY9e/yr1vpN5DGqtp8jR7c+UqEDPpmrEtjqLzrK0E5G0kDyiSp7dfSsMtNZn7H+mQpryD7q6KQB7iRMngogyc5/Kq1+IXhh9ohuw27gAZfuR19PSprrTMFTcaTcBlyxaOJzu5JxgZoVfzXckUiNa3K+am7+YjDaecYBHX5dqeFE1jhoHNE9tHbQpFJAjSPI2RI65C/Hj96Hkz2mpK4WGZcZD+9gZOPXg9RTfOuobeOTDokSqSpkGQB8M5x8qM2M6PZoJxLJuT396krnOcHPGKeSdfL5yKM8ydoWw8UKr9oxtn3vmc8daggkiJkvBm4leTbuHulQBnIHp8anOlWsiv5QVYFXeyxZVjxnp6VXitoZbkXDSmOONCIxFGfd7f5PrSR2vJI8yWkt17a+VkjZRlmDbz3+FSz3/lxJcW0jM5P+rWP3W5HHH04qlqrwRe4x8x3yMuuTnp//fjQqOeS3G1Z3ByybUyCAepz2zViqUiGX7ry7oPMGCSA85wF75+vShtvctGhXKg55GK8kCBcmfkruKgE/SoJHVm/lMSo4Hu1ohFdkKdAn072W59oWNmCglFY7sseMsR8/wAqD/4fexGK6xG4UeY6PjCL3yPh1qW+utTTbbWt0rtvLgRPkpz3I6j4UMuL2/uYltrubILDe7devcfMVzaq7OG2i+c8s1eiXUsodLkpE6qW87djDHOOOijv1qLVLmO3XbCWaVgpIMZAI93kH8jQDTzbpBew3V0UR8KpGdrEc9M/DNUZL1ZGlmZnmSN8I7E9BnHw4qVps2NkdT2ljUb5r6aBj7vl5285JJOenaqrQOYJZ1VwsbAKx7Hr+/3VY0+M3U8Yk8nCqdygYLEjgjHJPejVtpiPA3msrRtIEjD7hhuevz7ZqyUlV7UJ3Zn1tWd3JLMrNuLLz25H3/lUcc7WV5LJp0wOAYwzICcHrx+GfjRHUlFvPiKQEZKuy8huuDQaYKskksBLRqMEvjOB6gVog1NEZafAgkkh2ySEmN2ORn7zVyeI2m4l8h8BVHx70Lto3uJPLUrwCcua0csBOmadJLzNIMJGv2nxx0/Wr1DLSRO7PcTTIjHBuk3RmUlVITl8AYI9etGILO1jQe2ySSkZARBtHPXJ/bFR28JgUSTESXAXAwPdiHov6nvT2aPaWZt7/wBo6119LoK61utWWYbb3J4iTNcaZGqqNOjfb9nzQHx95p662I12wwJGB2TYg/AUHugUl2dW6t8DUtldWCW80V9BI7PwsidUHw5FdHdGC9kUv6K/dLuy8fE0pOAk3y8//wBtMbxBLkFo5Prdf+yg9o8KTAzp5id19ahvJYnuHNuhSLsp7VHqJr5J6cfAb/x8g/6ub6XI/wDLTv8AH4+/tS/KRG/asyWqwkG9Ay5bJxkUr1c18kqqPg0A8RDotxeKe25B+jVbsr+8vHKtPIwHIUscfX8KyMalbnyiOhGfzrS+Hj71w46AhP1P503qJyrk2GyK5Ct1JePCY5VtJ4jw0cy7hj7v0qneRRyQ+VPZNBGF25tW3xgfFeD91EiAdyH+oYzVOGUtnPBHBHpWOenhdxMlWOPYHpCzD/ojbgek45UfDI6d89+arpYytqUs11aLsQ+XlCclskZHxIxRaW0WaTzYXEMzD7WMqx9HXuPx9CKtafdW89yYLuNbS8Vi7R4yG6e8hyODtri6vRS0/ujyv9GymxWcfIBvNDMVu88plWN13hVRfc45J+vOM1mPZp52f+TMxC7gRk4A9R6V1PUXt7lIoRKzI0YLbVGcHv1+tNe4tbeNEgjJjRhuX1PHBPft91Yes4LhZNLpZiNF0hjJEs9kJo2b3jKBlP8APpVe+8Oq+o3CxMsag5AWI4APQcfL8a6GLuOYh8FBHJx045qJZlZnMZjIJ645po3y7kqg5g15JZz5jTc6DaxBODmoo7uW5LiZWbcoRMge7zT4m8xD5hZnY5HP1NW7PTHn1O1t7fLySJuYenukn9KvxFMp2gq5HvYHUcUU8M27zl4F4LEsxb3lA+Aobeo0c8qkFSGIOe1anwXARayShhvcgDBBwPkOh60t8ttZGOQxp2iRWs6TNdzExneVCqu4j5VBfWvs9qZfaHZt5JUsB72cjnrx2omCwkdAxBJ/q7cUE1eaWa99mhh8whT/AC0BJPxrFXmyzDL3sSzgAzxETofNdUZCSxGe57/hRHS/DR1ZPaJ5JFDkbR3IHQ5pk2m3bW8Mfs9ysq7i2YTxzwKv2IvoykU82oLtGQqggcegGa72g06di6seDJe3t9jAd7aJpmpywoJB5LbOuTKSBwPvovp1lMu+4lG+52e+2PdiX+0f55qS50PULjUPbLVJ3fHElyOh78HFGLey1RLI2rC2jjY5bMoyTj4A11a9Mo2OUV/wy2TbikBhOuHVIy5bvmlhjPmBn2rj3grMBk/Wiq6PJGoXzrdR/uuf2qJ9I3Ag3MP/AGm/atbomyjejPSiYXDtONrsec+lVpThjk5HwNaJtHxge0w4ByByQPwp4sZP/qoSfhGP2qPSWjdWJl43CyB26A9M96jnkEkhYADPYVoZ9OSV8z3VuSB/QCPwAqnLpsC8osjj1Ctj8aX0dmRlbECk1asZlQsHOBwQaseyQ/8Ayj8i9XbVdISFhcaTLNPzgxTuqAfHL5z9Krs0duO2R42IF2ZaW4kkbnHOaMeDGkumu4lxkygoD36Ch5iuIraQRQLFH/W27JPwqno0esq7LaSyWceS3mbBkH4Z5pLI9KMY4zySlvTOhTWNzB9qRXI7bMfrQuKUm7mDoyEHJGPxH40Mi0/WJR72uX+T3STb+X70QsdGltZDNNdXM7nqZZC5/GrHa5LChj+yqNW3vLITSLzFIjOO4OaqalGLkWhClZ0mBQ45Xs361cijA+0zn58flT3ubGzTzJl6cZ7iodTfE+wyaT9oiR+ygyN/MH94GOP94VDIts+W2sGc/ZxwSM9u/b7qlfX9Lh4Mq57hRuNDG1FbgzPaPt3Nsj89MqoPXOOg/wA5rzv1LSV04nW+/wAeDpaa+c47ZIu4n2rCoyVkJY7dpIJPAXpXpxbBsTSvu+AWqkd17Uptw/vbMkheMnoQR2qRDPsVUDYXjDEVyot45NqksEI8IFLotboQBkbpJMgA/ACjOi+HotLuPaXuC8uzYvu8AfvRsTJwCnHY461Gx8xsRoP+t2rF6qxmROKM5L4J0mW5ku55LyR3cs2XABJOfSidlpNnp0bJa2hAc87nNXWkSPLTZ9wZJHarVxaC5ghhgzDcFA4lZcqc9iPurboqLNbPE5Yiu5VOe1ZSA8tirRkbo4upyAzkfjiqaTW1mXNv9tz7zkZZvmadrFtqlhHP7dxFDnzHiYMox15H64rIt4h08H/aCfkM17jRaL6fpFuUln+eTn2Tus4wa/8AxRxzvIPrTpdXKp9skn41j017TXOPawv/ABLR7QLEaxcKbWVLqFGHnLFIAwX610+rpMZU0zO4TXdDptTkY9T99VnvZD3Ne1k2NrdyJ7TbW6IcbDNvI+ZFDjfad/8AcbUj/mCnjqdLhNySDpyfwXfaJW7kfOlDKP8AWSMflVSK6sJDtGpWQ78yfsDU9tHFdSiKC5tnlP2Y1b3j8lPP4U61Onfaa/YOuS7osLdW8fSNSfVuaV9XOMIi49MVah8L6rc8W1hPKx9EKD72wPxq8vgPVFCm7aCDPAVX8xvuH70k9XpY95oI1SfZAB9Su34RhGPUCq0sm8b7m4d/m2a1I8J2iRyNJevI0YyV4TPyyKDeKNAhsIIp13AOcOhmw0fHU5GD6cVmn9U08PtLo6ebA/tUf2be33n+9jwPrVuOGWW2aaa4jiRftbe31xWdkeRSAHbdjnB6VZg1YxW0ltdp5sUmM+/tb6Glv1C25bxkaNfPBeu4PKh81bmLlSY5JG3ZPzJwPoKh0W+9mnlNzM8wcAxqoL89+cY9ai1DUbWeOKOG2VIU4BkXJX5AVFPJbQgB7oscA7YkH59K58rk/t5LlF/JpTrMSD3fdb+0DJoffa7NKojty28EHAOSfoKzcl2ucIjFe29/0GBSpNcFdqeYqntGNoNZpXTz3SHUEaCa8vWH86ZbcdzI2D9AOagSbSy49tnluDn+3C5+XWhAtLiUj3W+bmpV05ghUsufSqZWxzlvI6gzY6bcWSRNLarGERc5Ueg6etS+BVin9reZQzttcAjgZz/6VhWlk0yMkBmLjGxDgEepra/w8mS4SS4j6SLgKeoIPesP1a9WUcfA1MdjbNTPptlcx7ZIAfQjtTbfTbWDdsXZuP8AU2au8gc/Q+lIdpPK78dzXlurLyXbme8pv7QfhTtknHu/+KpqXj0rtP6fW+zY24DeIHaKxMKHa8/Gfh3/AM/GqV7e3N37JNHYPFcQpsE0M5ww9CuR+vypnjd5IvYmiO05fkfSqGia3ieO3vlCozACUdF+dej+nfTqFpcc5y+Tn6m2yM8xCevXSan4evbSLRzDcTId8qXJJ3Y5yDnIJ7Vx2basMBGFkUsJQeuQQR+30rsuqOdNmMm3Iz0HQ0Dfw/p3ia7YWVg/tbqWZYeM+p9O9ab/AKYtqnW+PyVU6yT+9HMlDCPMijbjgnqeMUf8GXs9jqV21uxjL2U493jPAx+Vamb+Furn7FtdAZ6NHu9f3op4f/h/c6bI8t5Z6hNIylfcgwApxn8qx16WUZrdJY/lF1t8XBpJ/o5CvKBioZuMkj609QQAQq4wOSo7c10i/wD4W3RnJ0+DUkhP9MsGSD9KiX+GF9bwtLfNPFAi5d5ItoA+J7VV6Wb8ftD+ohj5/RgY4JHiyqK4A5CgFgBzkjGcc9a03gW11ZtahutItZpTbxnLIvu7iMYzjHc1rtI8G+HrOZJtQupJyp+whPPbtXSNAu9OCx2mkWaW8CDhUQAAU70c4LMkUT1kXxAzemaj4is9Uil1m1uIbXaQ4it2c/PcoIorqXiFo5LWTSbC4vSZB5ySQyHC9CQdpGfTtxWn1rVdO0i2V764jjLfZU8s3yHU1jL/AMdW/vLZ2Msno0jBQfzNTTpbL+YReAnqZQeOAZeXt2ZzJ7FqEcHQKWjQsvocnj071kfFOr3+rER3YjRIjlYojkZ6Ase/3Yo3qXiG+vA38mONT2AJrG6jNKHY7uTXYq0NdMOpYstFUdRZN4+AfOohRpXIwOcHrQGVWu5C7uC7HgZ6Vf1dmW2UnJDtgk/DmhAYqxA6iuLrb+pZ+Ebqo4iHNIXz45ba4J3Rcqw7rVxbaJein61S0t/5sb5H8xSqnPc9vvx99GLS2aRVLZO5c81lUmuEWNZIEiRfsqo+QqYA+tWvZ4U/1kgHwqCa5tYxtRlB/uY80r3MNuDyqfWvSDA4606CUFNycjtnvUdyzAZY4xzVWORuwIeQTXzqeRkqPhgc/ia1n8Mj/tAU/wAsOSvyI/esTulNtK8fRfec46ZPr2rf/wAMIhHYXEpBcq+wEDpwD+tZ9dxQwWTb4/lDdyc8ZNewTz+VIGTavBJ64HNNWNpPe3hM9AeK8/gOS4CKXimY+JpcEV6pjmP/AIk3kllBpzwxJK7ysgVxx0rMaqupafZ6fdzw2rxX0PmxhMjHAODz1wwrbeN7L2vTIpu9tKJB8+n61hLmC8u41UzK6oDsVuAuTk4rq6b1Mq8Uvgy2qtSzI12mapbap4bb/Ep4YJrQAO0jgDHbk9fSovAXijQtK8WpJc6lFFB5TqZXBCjIGOazFrasjSJehDbyrskQP7231HxHUUJk0aJr4RXEixMD9pR7sg7MPpWu+eojQ68d+5RXVWp7kz6VTx94Qc8eItN+s4H51OvjPws/2fEWl/8Ae0H618sPZDzmHksRkgHHFWRZ24AyVUnkZJFcPa0bT6jHi3w1/wDkOk/99j/egvjXxRoEvhHWo7bXNMlmaylEcaXkbMzbTgAA5JzXzutpakDbImW6c0os7UgAOvJx9odaI5TyGM8G40zVbG7mVBe2+4ngNIAfxrocFzZ+GNFk1K7OW2+4AeXPZRXBrPShe3ksCOo2JlnYjaB8aNJBePYW9nAbma1hzsZ87ST1Iz0Hw7V3YXW6xbWsI5dmmhXLdkKah4shu7yW91C3u7id+yhSqj+1RngCmQeLtJbap07USx6BUTn/AMVBn0u7RtzwyNxyEQn5V6O1uxIv/RplIUjcY2H5/wCfjRfdqa59OtcL8FkaKJLdJmsu9StIrFbq40zULO3kwFlmjBXnpkhjjPxrIX8iyyHb0J4Nae98RX1zpktrfWsReWBYHkwMhRgZA/uwO5xWPmXZtUHII931A5ojqNQ63G2I0aa4yzBg+8t7m+u0srONp2Ubtq+vehUigbWI5HUAd6vw3lzbanLcWJYTITyADwOOlD5RvY7ec8/fXFly35NqL1lJ/Jfn343V1A/px1/T7qPTz3TERW3CY61TSxij026nVkOzYo29dzEL/wDq5+lNk1W3VgFdyg67OpohjdyDLBsriTHnTY+GcGp00pl2+TD5h7tJ7oH0of8A6RiAYtLVR/vOcmqlxr2ozgj2gop/pQBa0OVa7vP8FeJeDUTxvZwFmms4Md5GOT8vSg91eLLYuyqRk43diTxx61npZZZG3SMWY9ycmmxkB9x61nscG/asDxT+WXvNdISoYhHJU4/4s/qK6d/DtVOiXRXeFkuG2gjPAVR1rmNtF7STHvCkHePU1qtF1LUdPtBBZ3JRMk7R6nr1rFqa5W1uESyLw8nUAu1SMNwMdOgpGRC3Jf6AGsImua1KVj84uRx0GfwopZnxTcKzRW0pUHq6AZ++uXLQ2It3I14YUuc0wAY60oOK7Ig2eGOaNopV3I4wynvXOfEVpcaPLKkajacmEnkMP3rpJ5/eqt9ZxXtu8F1Cssbf0sM8/CrK7rK3mDwLKCl3OFXt55xzLuDfrSQ65eQxiIMskY6CRc8Vrta8A3gmZ9OzLGTwrMoI+8/rQZvA2t5/2OT6Mn70ytkuU+RXD8A8a83G6ztiP+Wv7VKviI7SptIcHtsH6Yqd/BWsxjLWU30Kn8jVd/DmoR9bK6+qH9qb1Fn+RHTXgf8A6QKf/gYj9XH5MKkGvIBkWMAP/FL/AOeqZ0a9XraXC/OM1G2l3Y6wSgf8BqevPyRsXguT6+0ieWqCKPP2YxjPzPJP1NN/0k1BSCt5djHQe0Nj7s1QOnzD+h/+yab7DJ6H7qOvZ5DZHwbTQ/4hCOIxa5bPOo+xLDjcfgw6H5ip7nxxpk/uxQXHwD7R+tYUafOfsxSH/qmvPYTIMvGyj4jFX16++vsyiWjqk84NDda9DLkiGQfPFDZdUQ4IR8gcZoeltKp4QEfOp/ZZpBgW8uexWMmizX32rEmWxphHsimsksbbo3Ks2QWX0psEZZwFJHyHNX49K1GVsLp90x+ELftRKDwzrzLiLSLs55JYAfmRWTKLcA66mZIVt0k3KhyMdC+MZ+nP4+tD1iJ6A1s7XwLrc+DLZrF/zJl/QmjNp/D67GDLPbqe4XLftUZXyGGc5jtXboKsw6ZLIR7vJ9K6pb+BrWLBnuZHx2RQv70etNNt7ONVt4VQKMA4GT8zUb18E7WcltPB+oXABW0lwe7Db+dGLb+HFw4zK8Mfw3En8P3rpgTHXgmnbA2dx61G9k7UYm0/h3paLumaRnX0zj7iTWh0zw/p9kVcIzkf3IhH4ii20dOoPSnEYGBS5bJwi3byWkS7YtsY9FXFTFo25DD60NGCcY5ppUk5pXEZMQAGn4FRKaetSKPOVHFNO7dxXnO3OPSlA97qelAHioxgDqK9t9aeByKbk9O3/rQSJs4/KvNHwPWnN7xGe1KRgVGAGLGONwzXjFHnGKc5wn0pewNADDDH/YPur3kRD+kfdUxOOB2pg+2aMAM8hCMhRika2iI5jU/MUocggCpGNAEKWsC/Yij+YUU8xIFDAAYPpSofdPAp3bHwoATABpcDn4UwnnPcUoPvH6UAKeRx3rxzjoKax5paAPduFApP+LIFP7UjdKAGhR2pFwRj404dK9KAAuKkDypk8UuMAZ70wsQBjvTkOQ5wM7sUAeYYU460xSSMmnNSUAf/2Q=="
       
        let name=document.createElement("h3")
        name.innerHTML=`Brand name: ${el.brand}`

        let type=document.createElement("p")
        type.innerHTML=`Type: ${el.type}`
         
        let kms =document.createElement('p')
        kms.innerHTML=`Kms: ${el.kms} km`

        let year=document.createElement('p')
        year.innerHTML=`Year:${el.year}`;

        let price=document.createElement('p')
        price.innerHTML=`Price: ${el.Price} Rs`;
         
    

        let description=document.createElement('p')
        description.innerHTML=`Description: ${el.Description}`

        let buttoncont=document.createElement('div')

        let deletebtn=document.createElement('button')
        deletebtn.textContent="Delete"
        deletebtn.setAttribute('class','delete')
        deletebtn.addEventListener('click',()=>Deleteitem(el.id))

        let Edit=document.createElement('button')
        Edit.textContent="Edit"
        Edit.setAttribute('class','edit')
        Edit.addEventListener('click',()=>EditCard(el.id))

        let wish=document.createElement('button')
        wish.textContent="Add to wishlist"
        wish.setAttribute('class','wish')
       wish.addEventListener('click',()=>AddtoWhishList(el.id))

        buttoncont.append(deletebtn,Edit,wish)

        div.append(img,name,type,kms,price,year,description ,buttoncont)
        cont.append(div)
    })

}

function Sort(data) {
    document.querySelector("#sort").addEventListener("change", (event) => {
      let val = event.target.value;
      if (val == "asc") {
        data.sort((a, b) => {
          return a.Price - b.Price;
        });
        Append(data);
      } else {
        data.sort((a, b) => {
          return b.Price - a.Price;
        });
        Append(data);
      }
    });
    document.querySelector("#kmsort").addEventListener("change", (event) => {
        let val = event.target.value;
        if (val == "asc") {
          data.sort((a, b) => {
            return a.kms - b.kms;
          });
          Append(data);
        } else {
          data.sort((a, b) => {
            return b.kms - a.kms;
          });
          Append(data);
        }
      });
  }
  
  function Filter(data) {
    document.querySelector("#brand").addEventListener("change", (event) => {
      val = event.target.value;
      let newdata = data.filter((el) => {
        return el.brand == val;
      });
      Append(newdata);
    });
  }
  
  
  async function AddtoWhishList(id){
    try {
        let res= await fetch(`https://pacific-plains-53138.herokuapp.com/cars/${id}`)
        let data=await res.json()

      PostinWhishlist(data)
     
   } catch (err) {
       console.log(err)
   }
  }

  async function PostinWhishlist(data){
    try {
        let res = await fetch("https://pacific-plains-53138.herokuapp.com/wishlisted_cars", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        if (res) {
            alert("data added to whishlist successfully!")
          
        }
      } catch (error) {
        console.log(error);
        alert("Please try again later")
      }
  }
  async function Deleteitem(id){
    try {
        let res= await fetch(`https://pacific-plains-53138.herokuapp.com/cars/${id}`, {
            method: "Delete",
            headers: {
              "Content-Type": "application/json",
            }})
    if(res)
    { 
       
        alert("card deleted succesfully")
        Getdata()
    }
     
   } catch (err) {
       console.log(err)
   }
  }
   function EditCard(id){

     let pricemodel=document.querySelector('.pricemodel')
     pricemodel.style='border:1px solid; padding:20px; background-color:wheat'
      let change_price =document.createElement('div')
       let h4=document.createElement('h4')
       h4.syle="text-align:center"
       h4.innerHTML="update you card here"
       let input=document.createElement('input')
       input.style='margin-bottom:30px'
       input.placeholder="enter new price"
       input.setAttribute('class',"updateinput")
       let btn=document.createElement('button')
       btn.addEventListener('click',()=>UpdateCard(id))
       btn.textContent="update price"
       let br=document.createElement('br')
       change_price.append(input,br,btn)

    //    card.append(change_price)

       pricemodel.append(change_price)
  }

 async function  UpdateCard(id){
    let val=document.querySelector('.updateinput').value
    try {
        let res = await fetch(`https://pacific-plains-53138.herokuapp.com/cars/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({"Price":val}),
        });
    
        if (res) {
          alert("successfully edited");
          Getdata()
          let pricemodel=document.querySelector('.pricemodel').innerHTML=""
          
        }
      } catch (error) {
        console.log(error);
        alert("Please try again later")
      }

 }
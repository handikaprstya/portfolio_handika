import { Box, Img  } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'


export const Cart = () => {
    const data = useSelector((state) => state.Database.value)
    console.log(data)
    const barang = data.map((value) => {
        return(
        <Tr>
            <Td justifyContent="center"><Img src={value.img} w={"100px"} h={"100px"}  border="1px solid black">
            </Img></Td>
            <Td>{value.name}</Td>     
            <Td>{value.price}</Td>    
            <Td>{value.qty}</Td>    
        </Tr>
        )
    })
    return(
            <Table>

                <Tr>
                    <Th>Gambar</Th>
                    <Th>Jenis Produk</Th>
                    <Th>Harga</Th>
                    <Th>Stok</Th>
                </Tr>
                {barang}
            </Table>
    )
}
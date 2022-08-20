import express from 'express'
import pool from '../config/connectDB'


let handlehome = async (req,res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `user`');

    res.render('web.ejs',{data:rows})
}

let getDetailPage = async (req,res) => {
    let id = req.params.id
    const [rows, fields] = await pool.execute('SELECT * FROM user WHERE id = ? ', [id]);

    res.send(JSON.stringify(rows))
}

let creatuser = async (req,res) => {
    let {firstName,lastName,email,address} = req.body
    const [rows, fields] = await pool.execute('insert into user(firstName, lastName,email ,address) VALUES (?,?,?,?)',
    [firstName,lastName,email,address])
    return res.redirect('/')
} 
module.exports = {
    handlehome, getDetailPage,creatuser
}
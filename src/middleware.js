const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const helmet = require("helmet");

module.exports = app => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(helmet());
    app.use(morgan("dev"));
};
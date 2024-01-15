import React from "react"

const BuisnessDetails = React.lazy(() => import("../../page/buisnessdetails"))
const Content = React.lazy(() => import("../../page/content"))
const Imagegallery = React.lazy(() => import("../../page/imagegallery"))
const Buisnessuser = React.lazy(() => import("../../page/buisnessuser"))


export const PATHS = {
    buisnessDetails : "/buisness-details" ,
    content : "/content",
    imageGallery : "/image-gallery",
    buisnessUser : "/buisness-users"
 }

export const routeslist = [
    {
        path :PATHS.buisnessDetails ,
        Element : <BuisnessDetails />
    },
    {
        path: PATHS.content ,
        Element : <Content />
    },
    {
        path : PATHS.imageGallery,
        Element: <Imagegallery />
    },
    {
        path : PATHS.buisnessUser,
        Element : <Buisnessuser />
    }
]

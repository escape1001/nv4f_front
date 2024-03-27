interface PostType {
    id : number
    title : string
    contents : string
    thumbnail_image : string
    map_link : string
    country : string
    city : string
    district : string
    categories : [string]
    members : [string]
}

interface FilterListType {
    categories : [DefaultNameType]
    members : [DefaultNameType]
    locations : [LocationType]
}

interface LocationType {
    name : string
    kr_name : string
    city : [CityType]
}

interface CityType {
    name : string
    kr_name : string
    district : [DefaultNameType]
}

interface DefaultNameType {
    name : string
    kr_name : string
}
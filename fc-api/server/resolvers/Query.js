import db from 'mongodb'

import Program from '../models/Program'
import School from '../models/School'

const program = async (parent, {data}, ctx, info) => {
    const {id} = data
    let program = await Program.findById(db.ObjectID(id)).populate("school")
    return program
}

const programSearch = async (parent, {data}, ctx, info) => {

    const {offset=0, limit=10} = data

    const query = {}

    if(data.term){
        const expression = new RegExp(data.term, "gi")
        query.$or = [
            {"name":expression},
            {"degreeType":expression},
            {"degreeLevel":expression},
            {"schoolName":expression},
            {"deliveryMode":expression},
        ]
    }

    if(data.filter){
        const degreeLevel = new RegExp(data.filter, "gi")
        query.degreeLevel = degreeLevel
    }

        const programs = await Program.find(query).skip(offset)
        .limit(limit)
        .populate("school")

        const count = await Program.countDocuments(query)

        return {count, programs}
}


const Query = {
    program,
    programSearch
}

export default Query
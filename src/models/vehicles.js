import  db from '../utils/db'
import logger from '../utils/logger'

export const getVehicles = async (skip, take) => {
    //logger.info(db.vehicles)
    const count = await db.vehicle.count()
    const vehicles = await db.vehicle.findMany({
        skip,
        take,
    })
    return { count, vehicles }
}

export const getVehicle = async (id) =>
    db.vehicle.findUnique({ where: { vehicleId: id } })

export const addVehicle = async (vehicleData) =>
    db.vehicle.create({ data: { ...vehicleData } })



export const updateVehicle = async (id, vehicleData) => {
const vehicle = await getVehicle(id)
if (vehicle) {
    return db.vehicle.update({
    where: { vehicleId: id },
    data: { ...vehicle,...vehicleData},
})
}
return null
}
 
export const deleteVehicle = async (id) =>
db.vehicle.delete({ where: { vehicleId: id } })

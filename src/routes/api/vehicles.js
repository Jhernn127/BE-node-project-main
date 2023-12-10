import { Router } from 'express'

import {
    getVehicle,
    getVehicles,
    addVehicle,
    updateVehicle,
    deleteVehicle,
} from '../../models/vehicles'

const router = Router()

router.get('/', async (req, res) =>{ 
    const size = Number(req.query.size) || 10
    const page = Number(req.query.page) || 1   
    const skip = size * (page - 1)
    const take = size
    const { count, vehicles } = await getVehicles(skip,take)
    res.set({
        'X-Total-Count': count,
        'X-Total-Page': Math.ceil(count / size),
    })
    res.send(vehicles)
})

router.get('/:id', async (req, res) => {
    const vehicle = await getVehicle(req.params.id)
    if (vehicle) {
        res.send(vehicle)
    } else {
        res.status(404).send({ msg: 'Vehicle not found' })
    }
    })

    router.post('/', async (req, res) => {
        const vehicle = await addVehicle(req.body)
        res.send(vehicle)
    })

    router.put('/:id', async (req, res) => {
        const vehicle = await updateVehicle(req.params.id, req.body)
        if (vehicle) {
            res.send(vehicle)
        } else {
            res.status(404).send({ msg: 'Vehicle not found' })
        }
    })

    router.delete('/:id', async (req, res) => {
        const vehicle = await deleteVehicle(req.params.id)
        if (vehicle) {
            res.send(vehicle)
        } else {
            res.status(404).send({ msg: 'Vehicle not found' })
        }
        })

    export default router
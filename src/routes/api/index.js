import {Router} from 'express'
import basicAuth from 'express-basic-auth'

import persons from './persons'
import companies from './companies'
import departments from './departments'
import vehicles from './vehicles'

const router = Router()


router.use(
    basicAuth({
        users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
    }),
)

router.get('/api', (req, res) => {
    res.send({ msg: 'Inside API Endpoints' })
})


router.use('/vehicles', vehicles)

export default router
import  db from '../utils/db'

export const getDepartments = async () => db.Department.findMany()

export const getDepartment = async (id) =>
    db.Department.findUnique({ where: { DepartmentId: id } })

export const addDepartment = async (name, conmpanyId ) =>
    db.Department.create({data: { name, conmpanyId } })

 
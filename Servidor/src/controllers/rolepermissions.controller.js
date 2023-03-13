import RolePermissions from "../models/RolePermissions";

export const createPermission = async (req, res) => {
  const { role, permissions, model, actions } = req.body;

  const newPermission = new RolePermissions({ role, permissions, model, actions})

  const permissionSaved = await newPermission.save();

  res.status(201).json(permissionSaved);

  console.log(req.body)
};

export const getPermissions = async (req,res) => {
    const permissions = await RolePermissions.find();
    res.json(permissions)
}

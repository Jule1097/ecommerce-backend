import { Schema, model } from "mongoose";

const rolesPermissionsSchema = new Schema([
  {
    role: String,
    permissions: [
      {
        model: String,
        actions: [String],
        _id: false
      },
    ],
  },
],
{
  versionKey: false,
}
);

export default model("RolePermissions", rolesPermissionsSchema);

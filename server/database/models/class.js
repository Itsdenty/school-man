const class = (mongoose, connection) => {
  const { Schema } = mongoose.Schema;
  const UserSchema = require("./sub-schema/user")(Schema);

  const ClassDefinition = {
    name: { type: String },
    students: [UserSchema],
    teachers: [UserSchema],
    totalQuantity: { type: Number },
    totalCost: { type: Number },
    createdBy: { type: Schema.ObjectId, ref: 'User' },
  };

  const ClassSchema = new mongoose.Schema(ClassDefinition, {
    collection: 'classes',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });

  ClassSchema.index({orderRef: 1});

  return connection.model('Class', ClassSchema);
};

export default role;

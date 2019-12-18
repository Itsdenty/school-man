/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
import bcrypt from 'bcrypt-nodejs';

const user = (mongoose, connection) => {
  // const Schema = { mongoose };

  const UserDefinition = {
      phoneNumber: { type: String, unique: true, sparse: true },
      email: { type: String, unique: true, sparse: true },
      username: { type: String },
      verificationMode: { type: String },
      verificationCode: { type: String },
      firstname: { type: String },
      lastname: { type: String },
      address: { type: String },
      password: { type: String },
      blocked: { type: Boolean, default: false },
      isConfirmed: { type: Boolean, default: false },
      role: { type: mongoose.Schema.ObjectId, ref: 'Role' },
      last_login: { type: Date },
      login_count: { type: Number },
      deleted_at: { type: Date, default: null }
    },

    UserSchema = new mongoose.Schema(UserDefinition, {
      collection: 'users',
      timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });
  UserSchema.methods.comparePassword = password => bcrypt.compareSync(password, this.password);

  UserSchema.pre('save', function (next) {
    if (this.password) this.password = bcrypt.hashSync(this.password);
    next();
  });

  UserSchema.pre('update', (next) => {
    console.log(this._update);
    if (this._update.$set.password) {
      this._update.$set.password = bcrypt.hashSync(this._update.$set.password);
    }
    next();
  });

  return connection.model('User', UserSchema);
};

export default user;

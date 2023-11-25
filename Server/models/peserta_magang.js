'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peserta_magang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peserta_magang.hasMany(models.presensis, {
        foreignKey: 'p_id', // Name of the foreign key in Presensi table
        as: 'presensimagang', // Alias for the association
      });
      peserta_magang.hasMany(models.status_tugas, {
        foreignKey: 'p_id', // Name of the foreign key in Presensi table
        as: 'status_tugas', // Alias for the association
      });
    }
  }
  peserta_magang.init({
    nama: DataTypes.STRING,
    asal_univ: DataTypes.STRING,
    asal_jurusan: DataTypes.STRING,
    tanggal_mulai: DataTypes.DATEONLY,
    tanggal_selesai: DataTypes.DATEONLY,
    status_aktif: DataTypes.BOOLEAN,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    refreshTokens: DataTypes.STRING    
  }, {
    sequelize,
    modelName: 'peserta_magangs',
  });
  return peserta_magang;
};
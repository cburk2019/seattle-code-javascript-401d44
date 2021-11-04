'use strict';

// class
// class based design

// purpose, to do things consisdtently
// collection needs to read, create, update, delete

// model - Sequelize Model;

class Collection {
  constructor() {
    this.model = model;
  }

  // options, if we need to find something specific
  // id is a number or Sequelized identifier, could bo something different than a number, to select something from a table
  // options 1 - instance of a model
  // option 2 - we return an array of instances of a model

  async read(id, options = {}) {
    // if we want to pass any potion to sequelize, we define those as options
    try {
      let records = null;
    if (id) {
      options['where'] = id;
      records = await this.model.findOne(options)
    } else {
     records = await this.model.findAll(options);
    }
    return records;
    } catch(e) {
      return e;
    }
  };

  // this is an example of a pure function
  async create (json) {
    try {
      let record = await this.model.create(json);
      return record;
    } catch(e) {
      return e;
    }
  }

  async update(id, json) {
    try {
      let record = await this.model.findOne({ where: { id } });
      let updatedRecord = await record.update(json);
      return updatedRecord;
    } catch(e) {
      return e;
    }
  }

  async delete(id) {
    try {
      let deletedRows = await this.model.destroy({ where: { id } });
      return deletedRows;
    } catch(e) {
      return e;
    }
  }
}
import Client from './spark/client';

export default class SparkPlatform {
  constructor() {
    throw new Error('You cannot instantiate the SparkPlatform directly. Please use `new SparkPlatform.client()` instead.');
  }

  static client = Client;
}

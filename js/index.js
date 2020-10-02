'use strict'
import {loadData} from './loadData.js'

import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from  './genetateCatalog.js';
//import generateSubCatalog from './generateSubCatalog.js'


generateHeader();
generateFooter();
generateCatalog();
//generateSubCatalog();

loadData()
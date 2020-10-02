'use strict'
import {loadData} from './loadData.js'

import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from  './genetateCatalog.js';
import generateGoodsPage from './ganerateGoodsPage.js';



generateHeader();
generateFooter();
generateCatalog();
generateGoodsPage();
loadData()
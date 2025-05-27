#!/usr/bin/env node 
import { program } from 'commander';
import  gendiff1  from '../index.js';



program
    .description('Compares two configuration files and shows a difference.')
    .version('1.0')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]', 'output format')
      .action((filepath1, filepath2, options) => {
    console.log(gendiff1(filepath1, filepath2, options.format));
  });

program.parse();
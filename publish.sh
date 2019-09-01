#!/bin/sh
aws s3 cp ./estimate-onset.html s3://75mm.studio --acl public-read --profile 75mm.studio
aws s3 cp ./js/estimate-onset.js s3://75mm.studio/js/ --acl public-read --profile 75mm.studio
aws s3 cp ./css/estimate-onset.css s3://75mm.studio/css/ --acl public-read --profile 75mm.studio
aws s3 cp ./img/estimateicon-onset.png s3://75mm.studio/img/ --acl public-read --profile 75mm.studio

#!/bin/sh
aws s3 cp ./onset-pricing-eng.html s3://75mm.studio --acl public-read --profile 75mm.studio
aws s3 cp ./js/onset-pricing.js s3://75mm.studio/js/ --acl public-read --profile 75mm.studio
aws s3 cp ./css/onset-pricing.css s3://75mm.studio/css/ --acl public-read --profile 75mm.studio
aws s3 cp ./img/onset-pricingicon.png s3://75mm.studio/img/ --acl public-read --profile 75mm.studio

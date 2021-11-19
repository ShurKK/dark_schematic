module.exports = ({ env }) => ({
 upload: {
   provider: 'aws-s3',
   providerOptions: {
     params: {
       Bucket: env('AWS_BUCKET_NAME', 'darkschematic'),
       //StorageClass: env('AWS_S3_STORAGE_CLASSES', 'Static_archive_files') // Configure your Amazon S3 Storage Classes (including this to environment variable is not a must)
     },
     logger: console // Only if you want to `stdout` logs
   }
 }
});

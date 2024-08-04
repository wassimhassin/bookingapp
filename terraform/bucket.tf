resource "aws_s3_bucket" "booking-s3-bucket" {
  bucket = "bookingbuckets3"
  acl    = "private"

  tags = {
    Name = "booking-s3-bucket"
  }
}
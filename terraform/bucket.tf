resource "aws_s3_bucket" "booking-s3-bucket" {
  bucket = "s3bookingbucket"
  acl    = "private"

  tags = {
    Name = "booking-s3-bucket"
  }
}
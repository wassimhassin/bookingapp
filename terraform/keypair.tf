resource "aws_key_pair" "booking_app_key-pair" {
  key_name   = "booking_app_key-pair"
  public_key = file("~/.ssh/key-pair.pub")
}
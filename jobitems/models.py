from django.db import models


class JobItems(models.Model):
    jobItemId = models.AutoField(primary_key=True)
    jobId = models.IntegerField()
    side = models.CharField(max_length=500)  # edit length later
    inputUrl = models.URLField(max_length=200)
    outputUrl = models.URLField(max_length=200)
    status = models.CharField(max_length=30)

    created_at = models.DateTimeField(auto_now_add=True)

    # FAIL = 'Fail'
    # DONE = 'Done'
    # PROCESSING = 'Processing'
    # STATUS_CHOICE = [(FAIL, 'Fail'),
    #                  (DONE, 'Done'),
    #                  (PROCESSING, 'Processing'), ]
    # status = models.CharField(
    #     max_length=2,
    #     choices=STATUS_CHOICE,
    #     default=PROCESSING,
    # )

    # owner = models.ForeignKey(
    #     User, related_name="leads", on_delete=models.CASCADE, null=True)
